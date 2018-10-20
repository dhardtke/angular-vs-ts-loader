import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub735Component} from "./stub735.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub735Component
        }])
    ],
    declarations: [
        Stub735Component
    ]
})
export class Stub735Module {

}
