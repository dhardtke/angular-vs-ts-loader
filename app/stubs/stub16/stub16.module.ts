import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub16Component} from "./stub16.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub16Component
        }])
    ],
    declarations: [
        Stub16Component
    ]
})
export class Stub16Module {

}
