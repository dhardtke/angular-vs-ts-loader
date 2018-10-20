import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub982Component} from "./stub982.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub982Component
        }])
    ],
    declarations: [
        Stub982Component
    ]
})
export class Stub982Module {

}
