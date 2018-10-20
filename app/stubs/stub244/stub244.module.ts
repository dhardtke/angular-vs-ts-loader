import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub244Component} from "./stub244.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub244Component
        }])
    ],
    declarations: [
        Stub244Component
    ]
})
export class Stub244Module {

}
