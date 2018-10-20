import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub966Component} from "./stub966.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub966Component
        }])
    ],
    declarations: [
        Stub966Component
    ]
})
export class Stub966Module {

}
