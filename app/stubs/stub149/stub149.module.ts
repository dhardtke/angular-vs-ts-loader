import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub149Component} from "./stub149.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub149Component
        }])
    ],
    declarations: [
        Stub149Component
    ]
})
export class Stub149Module {

}
